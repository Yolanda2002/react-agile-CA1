import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function PersonCard({ person }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="340"
        image={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {person.name}
        </Typography>
        {person.known_for && person.known_for.map((movie) => (
          <Typography key={movie.id} variant="body2">
            <Link component={RouterLink} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
