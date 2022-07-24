import React, { useContext, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import usePagination from "./pagination";
import SingleRecord from "./singleRecord";
import ColorContext from "../../base/colorContext";
import Empty from "../../assets/empty.svg";

const data = [
	{
		category: "food",
		price: 50,
		remarks: "test",
		face: 1,
		id: 1,
	},
	{
		category: "travel",
		price: 50,
		remarks: "test",
		face: 3,
		id: 2,
	},
	{
		category: "play",
		price: 50,
		remarks: "test",
		face: 5,
		id: 3,
	},
	{
		category: "beer",
		price: 50,
		remarks: "test",
		face: 5,
		id: 4,
	},
	{
		category: "travel",
		price: 50,
		remarks: "test",
		face: 4,
		id: 5,
	},
	{
		category: "club",
		price: 50,
		remarks: "test",
		face: 2,
		id: 6,
	},
	{
		category: "travel",
		price: 50,
		remarks: "test",
		face: 3,
		id: 7,
	},
	{
		category: "travel",
		price: 50,
		remarks: "test",
		face: 5,
		id: 8,
	},
	{
		category: "travel",
		price: 50,
		remarks: "test",
		face: 2,
		id: 9,
	},
	{
		category: "travel",
		price: 50,
		remarks: "test",
		face: 1,
		id: 10,
	},
];

export default function PaginationList() {
	let [page, setPage] = useState(1);
	const PER_PAGE = 4;

	const count = Math.ceil(data.length / PER_PAGE);
	const _DATA = usePagination(data, PER_PAGE);

	const handleChange = (e, p) => {
		setPage(p);
		_DATA.jump(p);
	};

	const color = useContext(ColorContext);

	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			<Box
				width="100%"
				height="80%"
				flexDirection="column"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				{data.length > 0 ? (
					_DATA.currentData().map((v) => {
						return (
							<SingleRecord
								key={v.id}
								title={v.category}
								price={v.price}
								face={v.face}
								remarks={v.remarks}
							/>
						);
					})
				) : (
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<img src={Empty} alt="emtpy" height={350} width={350} />
						<Typography
							variant="body"
							fontWeight="bold"
							fontSize={{
								xs: "20px",
								sm: "25px",
								md: "25px",
								lg: "25px",
							}}
						>
							You currently do not have any expenses records!
						</Typography>
					</Box>
				)}
			</Box>

			<Box
				width="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				{data.length > 0 ? (
					<Pagination
						count={count}
						size="large"
						page={page}
						variant="contained"
						onChange={handleChange}
						color={color.mainColor}
					/>
				) : null}
			</Box>
		</Box>
	);
}
