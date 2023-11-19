import React, { useEffect, useState } from 'react';
import { getPeople } from '../api/tmdb-api';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import PersonCard from '../components/personCard'; 

export default function PeoplePage() {
  const [people, setPeople] = useState([]);
  const [genderFilter, setGenderFilter] = useState('all'); // 'male', 'female', 'all'
  const [creditsFilter] = useState(0);

  useEffect(() => {
    getPeople().then(data => {
      setPeople(data.results);
    });
  }, []);

  // filter setting
  const filteredPeople = people.filter((person) => {
    const genderMatch = genderFilter === 'all' || person.gender === (genderFilter === 'male' ? 2 : 1);
    const creditsMatch = person.known_for_department === 'Acting' && person.known_for.length >= creditsFilter;
    return genderMatch && creditsMatch;
  });

  return (
    <>
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" gutterBottom>
          People
        </Typography>
        <TextField
          select
          label="Gender"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          sx={{ mr: 2 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        
      </Box>
      <Grid container spacing={4}>
        {filteredPeople.map((person) => (
          <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
            <PersonCard person={person} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}