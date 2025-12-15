import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Header } from './components';
import { lazy, Suspense } from 'react';
import { useQueryParams } from './hooks/useQueryParams';
import Loader from './views/OnBoarding/Shared/Loader/Loader';
import SidemenuLoader from './views/OnBoarding/Shared/Loader/SidemenuLoader';

const OnBoarding = lazy(()=> import('./views/OnBoarding'));
const NotFound = lazy(()=> import('./NotFound'));

function OnBoardingWrapper() {
  const viewType = useQueryParams('view')

  // If ?view is missing, redirect to ?view=subscription
  if (!viewType) {
    return <Navigate to={`${location.pathname}?view=subscription`} replace />;
  }

  return <OnBoarding />;
}

const Loading=()=>{
  return(
    <div className="loader_container">
      <div className="container">
          <div className="flex gap-3">
            <SidemenuLoader /><Loader />
          </div>
        </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Navigate to="/onboarding?view=subscription" replace />} />
            <Route path="/onboarding" element={<OnBoardingWrapper />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;