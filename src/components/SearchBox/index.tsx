import { useCallback, useState } from 'react';
import { Select } from '../Select';
import { CheckBox } from '../CheckBox';
import { InputCity } from '../InputCity';
import { useSearchs } from '../../hooks/useSearch';

import carEnabledImg from '../../assets/icon-search-car-enabled.svg'
import bikeEnabledImg from '../../assets/icon-search-bike-enabled.svg'
import carDisabledImg from '../../assets/icon-search-car-disabled.svg'
import bikeDisabledImg from '../../assets/icon-search-bike-disabled.svg'

import { Container, Content, FilterGroup, FilterSubgroup, Header, Tab } from './styles'

export function SearchBox() {
    const [type, setType] = useState('car');
    const [newCars, setNewCars] = useState(true);
    const [usedCars, setUsedCars] = useState(true);
    const [local, setLocal] = useState('São Paulo - SP');

    const [distanceIsOpen, setDistanceIsOpen] = useState(false);
    const [makeIsOpen, setMakeIsOpen] = useState(false);
    const [modelIsOpen, setModelIsOpen] = useState(false);
    const [yearIsOpen, setYearIsOpen] = useState(false);
    const [priceIsOpen, setPriceIsOpen] = useState(false);
    const [versionIsOpen, setVersionIsOpen] = useState(false);

    const [distanceSelect, setDistanceSelect] = useState('100km');
    const [makeSelect, setMakeSelect] = useState('Todas');
    const [modelSelect, setModelSelect] = useState('Todos');
    const [yearSelect, setYearSelect] = useState(0);
    const [priceSelect, setPriceSelect] = useState('');
    const [versionSelect, setVersionSelect] = useState('Todas');

    const { distances, makes, models, years, prices, versions, searchModels, searchVersions } = useSearchs();

    const handleDistanceSelection = useCallback((value: number) => {
        setDistanceSelect(value + 'km');
    }, []);

    const handleMakeSelection = useCallback((value: string) => {
        setMakeSelect(value);
        setModelSelect('Todos');
        setVersionSelect('Todas');
        const make = makes.find(e => e.Name === value);
        if (make) {
            searchModels(make.ID);
        }
    }, [makes, searchModels]);

    const handleModelSelection = useCallback((value: string) => {
        setModelSelect(value);
        setVersionSelect('Todas');
        const model = models.find(e => e.Name === value);
        if (model) {
            searchVersions(model.ID);
        }
    }, [models, searchVersions]);

    const handleYearSelection = useCallback((value: number) => {
        setYearSelect(value);
    }, []);

    const handlePriceSelection = useCallback((value: string) => {
        setPriceSelect(value);
    }, []);

    const handleVersionSelection = useCallback((value: string) => {
        setVersionSelect(value);
    }, []);

    const closeAllSelects = useCallback(() => {
        setDistanceIsOpen(false);
        setMakeIsOpen(false);
        setModelIsOpen(false);
        setYearIsOpen(false);
        setPriceIsOpen(false);
        setVersionIsOpen(false);
    }, []);

    const clearFilter = useCallback(() => {
        setLocal('');

        closeAllSelects();

        setDistanceSelect('100km');
        setMakeSelect('Todas');
        setModelSelect('Todos');
        setYearSelect(0);
        setPriceSelect('');
        setVersionSelect('Todas');

        handleMakeSelection('Todas');
    }, []);
    
    return (
        <Container>
            <Header>
                <div>
                    <Tab 
                        type="button"
                        onClick={() => setType('car')}
                        isActive={type === 'car'}
                    >
                        <img src={type === 'car' ? carEnabledImg : carDisabledImg } alt="Carros" />
                        <div>
                            <div>COMPRAR</div>
                            <div>CARROS</div>
                        </div>
                    </Tab>
                    <Tab 
                        type="button"
                        onClick={() => setType('motorcycle')}
                        isActive={type === 'motorcycle'}
                    >
                        <img src={type === 'motorcycle' ? bikeEnabledImg : bikeDisabledImg} alt="Motos" />
                        <div>
                            <div>COMPRAR</div>
                            <div>MOTOS</div>
                        </div>
                    </Tab>
                </div>
                <button className="sellMyCarBtn" type="button">
                    Vender meu carro
                </button>
            </Header>
            <Content>
                <FilterGroup>
                    <CheckBox 
                        checked={newCars} 
                        text={'Novos'} 
                        handleClick={() => setNewCars(!newCars)}
                    />
                    <CheckBox 
                        checked={usedCars} 
                        text={'Usados'}
                        handleClick={() => setUsedCars(!usedCars)}
                    />
                </FilterGroup>
                <FilterGroup>
                    <FilterSubgroup className="filterSubgroup">
                        <div className="fusionInputs filterSubgroup">
                            <InputCity 
                                handleChange={value => setLocal(value)}
                                value={local} 
                                clearInput={() => setLocal('')} 
                            />
                            <Select
                                isOpen={distanceIsOpen} 
                                label="Raio: " 
                                text={distanceSelect}
                                handleIsOpen={() => {
                                    closeAllSelects();
                                    setDistanceIsOpen(!distanceIsOpen)
                                }}
                            >
                                {distances.map((option, i) => (
                                    <option 
                                        key={i} 
                                        value={i}
                                        onClick={() => handleDistanceSelection(option)}
                                    >
                                        {option}km
                                    </option>
                                ))}
                            </Select>
                        </div>
                        <FilterSubgroup className="filterSubgroup">
                            <Select 
                                isOpen={makeIsOpen} 
                                label="Marca: " 
                                text={makeSelect}
                                handleIsOpen={() => {
                                    closeAllSelects();
                                    setMakeIsOpen(!makeIsOpen)
                                }}
                            >
                                {makes.map(option => (
                                    <option 
                                        key={option.ID} 
                                        value={option.ID}
                                        onClick={() => handleMakeSelection(option.Name)}
                                    >
                                        {option.Name}
                                    </option>
                                ))}
                            </Select>
                            <Select 
                                isOpen={modelIsOpen} 
                                label="Modelo: " 
                                text={modelSelect}
                                handleIsOpen={() => {
                                    closeAllSelects();
                                    setModelIsOpen(!modelIsOpen)
                                }}
                                disabled={models.length <= 1}
                            >
                                {models.map(option => (
                                    <option 
                                        key={option.ID} 
                                        value={option.ID}
                                        onClick={() => handleModelSelection(option.Name)}
                                    >
                                        {option.Name}
                                    </option>
                                ))}
                            </Select>
                        </FilterSubgroup>
                    </FilterSubgroup>
                </FilterGroup>
                <FilterGroup>
                    <FilterSubgroup className="filterSubgroup">
                        <FilterSubgroup className="filterSubgroup">
                            <Select 
                                isOpen={yearIsOpen} 
                                label={yearSelect === 0 ? "Ano Desejado" : ''}
                                text={yearSelect !== 0 ? yearSelect.toString() : ''}
                                handleIsOpen={() => {
                                    closeAllSelects();
                                    setYearIsOpen(!yearIsOpen)
                                }}
                            >
                                {years.map((option, i) => (
                                    <option 
                                        key={i}
                                        value={i} 
                                        onClick={() => handleYearSelection(option)}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </Select>
                            <Select 
                                isOpen={priceIsOpen} 
                                label={priceSelect === '' ? "Faixa de Preço" : ''}
                                text={priceSelect !== '' ? priceSelect : ''}
                                handleIsOpen={() => {
                                    closeAllSelects();
                                    setPriceIsOpen(!priceIsOpen)
                                }}
                            >
                                {prices.map((option, i) => (
                                    <option 
                                        key={i}
                                        value={i}
                                        onClick={() => handlePriceSelection(option)}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </Select>
                        </FilterSubgroup>
                        <Select 
                            isOpen={versionIsOpen} 
                            label="Versão: " 
                            text={versionSelect}
                            handleIsOpen={() => {
                                closeAllSelects();
                                setVersionIsOpen(!versionIsOpen)
                            }}
                            disabled={versions.length <= 1}
                        >
                            {versions.map(option => (
                                <option 
                                    key={option.ID}
                                    value={option.ID}
                                    onClick={() => handleVersionSelection(option.Name)}
                                >
                                    {option.Name}
                                </option>
                            ))}
                        </Select>
                    </FilterSubgroup>
                </FilterGroup>
                <FilterGroup>
                    <button>
                        <span>&gt;</span>Busca Avançada
                    </button>
                    <div>
                        <button type="button" onClick={clearFilter}>
                            Limpar filtros
                        </button>
                        <button type="submit">
                            VER OFERTAS
                        </button>
                    </div>
                </FilterGroup>
            </Content>
        </Container>
    )
}