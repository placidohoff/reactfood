//OVERVIEW: useEffect hook will allow us to run the function only once the component is first rendered

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    //the state uses '' empty string in the beggining. 
    const [term, setTerm] = useState('');
    //Initialized as an empty array but will be filled with data from the response body
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    
    //asyncrhonous operation
    const searchApi = async (searchTerm) => {
        console.log("Testing");
        try {
         const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
        }});
        setResults(response.data.businesses);
    }catch(e){
        setErrorMessage('Something went wrong');
    }

    
    }
    useEffect(() => {
        searchApi('pasta');
    }, [])
    return ( 
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                                
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList 
                title="Cost Effective"/>
            <ResultsList 
                title="Bit Pricier"/>
            <ResultsList 
                title="Big Spender"/>
        </View>
     );
}

const styles = StyleSheet.create({});

export default SearchScreen;