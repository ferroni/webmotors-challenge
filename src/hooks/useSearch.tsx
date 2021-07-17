import { createContext, ReactNode, useEffect, useState, useContext, useCallback } from 'react'
import { api } from '../services/api';

interface Make {
    ID: number,
    Name: string,
}

interface Model {
    MakeID: number,
    ID: number,
    Name: string,
}

interface Version {
    ModelID: number,
    ID: number,
    Name: string,
}

interface Vehicle {
    ID: number,
    Make: string,
    Model: string,
    Version: string,
    Image: string,
    KM: number,
    Price: string,
    YearModel: number,
    YearFab: number,
    Color: string,
}

interface SearchProviderProps {
    children: ReactNode;
}

interface SearchsContextData {
    distances: number[];
    years: number[];
    prices: string[];
    makes: Make[];
    models: Model[];
    versions: Version[];
    vehicles: Vehicle[];
    searchModels: (makeId: number) => Promise<void>;
    searchVersions: (modelId: number) => Promise<void>;
    searchVehicles:() => Promise<void>;
}

const SearchsContext = createContext<SearchsContextData>(
    {} as SearchsContextData
);

export function SearchsProvider({children}: SearchProviderProps) {
    const makeBase = [{
        "ID": 0,
        "Name": "Todas"
    }];

    const modelBase = [{
        "MakeID": 0,
        "ID": 0,
        "Name": "Todos"
    }];

    const versionBase = [{
        "ModelID": 0,
        "ID": 0,
        "Name": "Todas"
    }];

    const distances = [50, 100, 150, 200];
    const years = [
        2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 
        2011, 2010, 2009, 2008, 2007, 2006, 2005
    ];
    const prices = [
        '30k - 40k', '40k - 50k', '50k - 60k', '60k - 70k',
        '70k - 80k', '80k - 90k', '90k - 100k'
    ];
    const [makes, setMakes] = useState<Make[]>(makeBase);
    const [models, setModels] = useState<Model[]>(modelBase);
    const [versions, setVersions] = useState<Version[]>(versionBase);

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    
    useEffect(() => {
        api.get('Make')
        .then(response => setMakes([...makes, ...response.data]))
    }, []);

    const searchModels = useCallback(async (makeId: number) => {
        setVersions(versionBase);
        if (makeId !== 0) {
            await api.get('Model?MakeID=' + makeId)
                .then(
                    response => setModels([
                    ...modelBase, 
                    ...response.data])
                )
        } else {
            setModels(modelBase)
        }
    }, []);

    const searchVersions = useCallback(async (modelId: number) => {
        if (modelId !== 0) {
            await api.get('Version?ModelID=' + modelId)
                .then(
                    response => setVersions([
                        ...versionBase, 
                        ...response.data
                    ])
                )
        } else {
            setVersions(versionBase)
        }
    }, []);

    const searchVehicles = useCallback(async () => {
        setVersions(versionBase);
        await api.get('Version?Page=1')
            .then(
                response => setVehicles([...versions, ...response.data])
            )
    }, []);

    return (
        <SearchsContext.Provider value={{ 
            distances, years, prices, 
            makes, models, versions, vehicles,
            searchModels, searchVersions, searchVehicles
        }}>
            {children}
        </SearchsContext.Provider>
    );
}

export function useSearchs() {
    const context = useContext(SearchsContext);    
    return context;
}