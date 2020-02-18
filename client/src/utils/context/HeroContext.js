import React, { createContext, useState, useEffect } from "react";
import API from "../API";

export const HeroContext = createContext();

const HeroContextProvider = props => {
    const [heroState, setHeroState] = useEffect({});

    useEffect(() => {
        API.getHeroes().then(res => {
            setHeroState(res.data);
        })
        .catch(err => alert(err));
    }, []);

    useEffect(() => {

    }, []);

    return (
        <HeroContext.Provider
            value={{
                heroState
            }}
        >
            {props.children}
        </HeroContext.Provider>
    );
};

export default HeroContextProvider;