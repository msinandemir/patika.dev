import {useContext, createContext, useState} from 'react'

const CityContext = createContext()

 export const CityContextProvider = ({children}) => {
    const [city, setCity] = useState("Adana");

    const values = {city, setCity}

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}


export const useCity = () => {
    const city =  useContext(CityContext)
    return city
}