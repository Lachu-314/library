import React from 'react'
import { Typography,Paper, Box } from '@mui/material'
function About() {
  return (
    <div>
<Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 4,
            width: 228,
            height: 228,
            },
        }}>

      <Paper  key = 'index'  style={{ backgroundColor: '#ffe6ff', height:'fit-content' }}>
        <Typography variant='h6' style={{ position :'absolute'}}>
                
            Top 45 Most Beautiful Quotations About Libraries, Librarians, Cataloging,
            Classification, Catalogers, and Library and Information Science. 
            Famous quotes describing why libraries and cataloging important and librarians and catalogers indispensable.
            Includes inspirational and motivational quotes from famous personalities for personality 
            development, personal development, self-improvement, and achieving greater success in
            personal and professional life. Below some of these quotes, is included a section
            "My Take" which is my perspective, opinion, or idea(s) about that quote when its implications
            are seen with reference to the development of Library and Information Science, Librarianship 
            Studies & Information Technology. 
        </Typography>
        </Paper>
        </Box>
    </div>
  )
}

export default About