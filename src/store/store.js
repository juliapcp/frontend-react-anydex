import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
	reducer: {
		
	}
})

export const useAppDispatch = () => useDispatch()
export default store;