import AcUnit from "@material-ui/icons/AcUnit";
import UUID from "uuid/v4";

/*
* Please do not add all the mock data statically here.
* While you would solve the problem, you would not be solving the bug ;)
* */

const defaultMock = {
	species: 'Human',
	name : 'Jon Snow',
	icon: AcUnit,
	description: 'You know nothing, Jon Snow.'
};


function createRowData({name, species, Icon, description}){
	// reference to default object was replaced with new object
	const rowData = {};
	rowData.id = UUID();
	rowData.name = name ? name: defaultMock.name;
	rowData.species = species ? species: defaultMock.species;
	rowData.icon = Icon ? Icon : defaultMock.icon;
	rowData.description = description ? description : defaultMock.description;
	return rowData
}


export { createRowData }
