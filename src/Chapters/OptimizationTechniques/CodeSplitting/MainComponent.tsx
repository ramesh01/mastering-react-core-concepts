import {lazy, Suspense} from 'react'

// Import the lazy component
const MyLazyComponent = lazy(() => import('./MyComponent'));

const MainComponent = () => {
  return (
    <div>
      MainComponent
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  )
}

export default MainComponent;