import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './components';
import { lazy, Suspense } from 'react';
import { useQueryParams } from './hooks/useQueryParams';
const OnBoarding = lazy(()=> import('./views/OnBoarding'));

function OnBoardingWrapper() {
  const viewType = useQueryParams('view')

  // If ?view is missing, redirect to ?view=subscription
  if (!viewType) {
    return <Navigate to={`${location.pathname}?view=subscription`} replace />;
  }

  return <OnBoarding />;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Navigate to="/onboarding?view=subscription" replace />} />
            <Route path="/onboarding" element={<OnBoardingWrapper />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;