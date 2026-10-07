import { useState } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SendIcon from '@mui/icons-material/Send'

function HomePage() {
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setGreeting(`Hello, ${name.trim() || 'world'}!`)
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" component="h1" gutterBottom>
        React + TypeScript + Material UI
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        A Vite-powered starter app styled with MUI components and a custom theme.
      </Typography>

      <Card component="form" onSubmit={handleSubmit} elevation={3}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Say hello
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Type your name and press the button to see MUI inputs, buttons and
            alerts in action.
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
            {greeting && <Alert severity="success">{greeting}</Alert>}
          </Stack>
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default HomePage
