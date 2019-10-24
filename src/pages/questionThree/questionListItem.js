import React, {Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';

function QuestionListItem (props){
	// some props parameters were not here.
	const {icon, name, species, id,  description } = props.item;
	const divider = props.divider;
	const classes = props.classes;
	const Icon = icon;

	return(
		<Fragment>
			<ListItem alignItems="flex-start" >
				<ListItemAvatar>
					<Avatar>
						<Icon/>
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${name}: ${species? species : 'Other'}`}
					secondary={
						<React.Fragment>
							<div>
								<Typography
									variant="subtitle2"
									className={classes.header}
								>
									Description:
								</Typography>
								<Typography
									variant="body2"
									className={classes.label}
								>
									{description}
								</Typography>
							</div>
							<div>
								<Typography
									variant="subtitle2"
									className={classes.header}
								>
									Guid:
								</Typography>
								<Typography
									variant="body2"
									className={classes.label}
								>
									{id ? id : 'ERROR '}
								</Typography>
							</div>

						</React.Fragment>
					}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</Fragment>
	)
}

export default QuestionListItem;