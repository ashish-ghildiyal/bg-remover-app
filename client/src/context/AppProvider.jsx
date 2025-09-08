import { AppContext } from "./AppContex"

const AppProvider = ({children}) => {
    const bgRemover = async (image) => {
        try {
            console.log(image)
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        bgRemover
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;  