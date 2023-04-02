import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h3>Ошибка 404</h3>

      <button>
        <Link
          to={'/gym_team'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >Перейти на головну...
        </Link>
      </button>
    </>
  );
}
