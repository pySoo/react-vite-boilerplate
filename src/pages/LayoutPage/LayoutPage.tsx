import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

export default function LayoutPage() {
  return (
    <ErrorBoundary fallback={<div>fallback</div>}>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
}
