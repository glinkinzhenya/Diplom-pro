import { Component } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';
import CreateModal from './CreateModal';

export default class TreiningCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    startQuiz = () => {
        console.log("Quiz started");
        alert("Quiz started")
    }

    render() {
        const { trainingName, imageSrc, info } = this.props;
        const { open } = this.state;

        return (
            <>
                <Card sx={{
                    width: 250,
                    background: 'rgba(0, 0, 0, 0.550)',
                    color: 'white'
                }}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={imageSrc}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {trainingName}
                        </Typography>
                        <Typography variant='body2' color='grey'>
                            {info.slice(0, 40)}...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ fontSize: '11px' }} size='small' onClick={this.startQuiz}>Записатись</Button>
                        <Button sx={{ fontSize: '11px', color: 'white' }} size='small' onClick={() => this.setState({ open: true })}>Дізнатись більше</Button>
                    </CardActions>
                </Card>
                <CreateModal
                    open={open}
                    handleOnClose={() => this.setState({ open: false })}
                    imageSrc={imageSrc}
                    trainingName={trainingName}
                    info={info}
                />
            </>
        );
    }
}


