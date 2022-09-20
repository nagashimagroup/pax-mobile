export default function ErrorFallback({ error, resetErrorBoundary }) {
  console.log({ error });

  return (
    <div role="alert">
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary()}>Try Again</button>
    </div>
  );
}
