import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    padding: '10px 20px', // Added padding for better spacing
    display: 'flex',
    flexDirection: 'row', // Keep items in a row (side-by-side)
    justifyContent: 'space-between', // Add spacing between elements
    alignItems: 'center', // Vertically center the items
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    display: 'flex', // Added to allow alignment with image
    alignItems: 'center', // Vertically center text and image
  },
  image: {
    marginLeft: '15px', // Adjust spacing between text and image
  },
}));