import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, TextField } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export function BasicCard() {
  return (
    <Card sx={{ minWidth: 400, m: 0, p: 0 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
          Chat Model
        </Typography>
        <Box sx={{ my: 2 }}>
          <TextField
            id="outlined-multiline-static"
            label="System Prompt"
            multiline
            rows={4}
            fullWidth={true}
          />
        </Box>
        <Button variant="outlined">Save</Button>
      </CardContent>
      <Divider />
    </Card >
  );
}
