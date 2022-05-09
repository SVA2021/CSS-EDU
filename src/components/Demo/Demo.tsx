import { Route, Routes } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import DemoPosition from './DemoPosition';
import DemoSelectors from './DemoSelectors';
import DemoAnimation from './DemoAnimation';
import DemoCSSFeatures from './DemoCSSFeatures';
import DemoJS from './DemoJS';

const Demo = () => {
	return (
		<>
			<Routes >
				<Route path="/CSS-EDU/" >
					<Route index element={<Preloader />} />
					<Route path="position" element={<DemoPosition />} />
					<Route path="selectors" element={<DemoSelectors />} />
					<Route path="animation" element={<DemoAnimation />} />
					<Route path="css-features" element={<DemoCSSFeatures />} />
					<Route path="js" element={<DemoJS />} />
				</Route>
				<Route path="*" element={<Preloader />} />
			</Routes>
		</>
	)
}

export default Demo;