//让外界可以获取redux(getState)数据，或者修改redux中的数据（dispatch）
import { createStore } from 'redux'
//rootReducer定义规则
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}