'use client';

import React, { useMemo, useState } from 'react';

import styles from '@/components/Table/Table.module.css';
import { mockUsers, User } from '@/data/mockData';

const Table = () => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: 'ascending' | 'descending' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Handle sorting logic
  const sortedUsers = useMemo(() => {
    if (!sortConfig) return [...mockUsers];

    const sorted = [...mockUsers].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [sortConfig]);

  // Handle pagination logic
  const currentUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedUsers.slice(startIndex, endIndex);
  }, [currentPage, sortedUsers]);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  // Sorting handler
  const handleSort = (key: keyof User) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig?.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Pagination handler
  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.title}>Table Data</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            {(['name', 'email', 'role', 'status', 'lastLogin'] as (keyof User)[]).map((key) => (
              <th
                key={key}
                className={styles.sortable}
                onClick={() => handleSort(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                {sortConfig?.key === key ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span className={`${styles.status} ${user.status === 'active' ? styles.active : styles.inactive}`}>
                  {user.status}
                </span>
              </td>
              <td>{new Date(user.lastLogin).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
