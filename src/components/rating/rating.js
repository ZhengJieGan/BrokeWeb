import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const StyledRating = styled(Rating)(({ theme }) => ({
	"& .MuiRating-iconEmpty .MuiSvgIcon-root": {
		color: theme.palette.action.disabled,
	},
}));

const customIcons = {
	1: {
		icon: (
			<SentimentVeryDissatisfiedIcon
				color="error"
				fontSize="large"
				sx={{ m: 2 }}
			/>
		),
		label: "Very Dissatisfied",
	},
	2: {
		icon: (
			<SentimentDissatisfiedIcon
				color="error"
				fontSize="large"
				sx={{ m: 2 }}
			/>
		),
		label: "Dissatisfied",
	},
	3: {
		icon: (
			<SentimentSatisfiedIcon
				color="warning"
				fontSize="large"
				sx={{ m: 2 }}
			/>
		),
		label: "Neutral",
	},
	4: {
		icon: (
			<SentimentSatisfiedAltIcon
				color="success"
				fontSize="large"
				sx={{ m: 2 }}
			/>
		),
		label: "Satisfied",
	},
	5: {
		icon: (
			<SentimentVerySatisfiedIcon
				color="success"
				fontSize="large"
				sx={{ m: 2 }}
			/>
		),
		label: "Very Satisfied",
	},
};

function IconContainer(props) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
	value: PropTypes.number.isRequired,
};

export default function RadioGroupRating(props) {
	return (
		<StyledRating
			onClick={(value) => props.ratingHandler(value.target.id)}
			name="highlight-selected-only"
			defaultValue={3}
			IconContainerComponent={IconContainer}
			getLabelText={(value) => customIcons[value].label}
			highlightSelectedOnly
		/>
	);
}
