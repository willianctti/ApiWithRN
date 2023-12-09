// App.js

import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fetchMovies } from './assets/services/api';

export default function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMoviesData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Game of Thrones Movies</Text>
      <View>
        {moviesData.map((movie, index) => (
          <View style={styles.FilmsContainer} key={index}>
            <Text style={styles.Titles}>{movie.l}</Text>
            <Text  style={styles.Titles}>Year: {movie.y}</Text>
            <Text  style={styles.Titles}>Rank: {movie.rank}</Text>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FilmsContainer: {
    width: 300,
    height: 90,
    backgroundColor: '#FEE0DE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 10,
    padding: 10,
    paddingBottom: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Titles: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    // marginTop: 10
  }
});
