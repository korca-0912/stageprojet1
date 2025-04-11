import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './DataTable.css';

const DataTable = ({
  columns,
  data,
  pageSize = 10,
  sortable = true,
  selectable = false,
  onRowClick,
  className = '',
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Tri des données
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Pagination
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);

  // Gestion du tri
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sélection des lignes
  const toggleRowSelection = (id, event) => {
    event.stopPropagation();
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className={`data-table-container ${className}`}>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {selectable && <th className="select-column"></th>}
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => sortable && column.sortable !== false && requestSort(column.key)}
                  className={`
                    ${sortable && column.sortable !== false ? 'sortable' : ''}
                    ${sortConfig?.key === column.key ? `sorted-${sortConfig.direction}` : ''}
                  `}
                >
                  {column.header}
                  {sortConfig?.key === column.key && (
                    <span className="sort-icon">
                      {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={row.id || index}
                onClick={() => onRowClick?.(row)}
                className={`
                  ${onRowClick ? 'clickable' : ''}
                  ${selectedRows.has(row.id) ? 'selected' : ''}
                `}
              >
                {selectable && (
                  <td className="select-cell">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(row.id)}
                      onChange={(e) => toggleRowSelection(row.id, e)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={`${row.id}-${column.key}`}>
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <span>
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
  sortable: PropTypes.bool,
  selectable: PropTypes.bool,
  onRowClick: PropTypes.func,
  className: PropTypes.string,
};

export default DataTable;