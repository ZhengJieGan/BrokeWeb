import React, { useContext, useState } from "react";
import { Box, Divider, Pagination, Typography } from "@mui/material";
import usePagination from "./pagination";
import SingleRecord from "./singleRecord";
import ColorContext from "../../base/colorContext";
import Empty from "../../assets/empty.svg";
import { useSelector } from "react-redux";

export default function PaginationList() {
	const data = useSelector((state) => state.reducer);

	let [page, setPage] = useState(1);
	const PER_PAGE = 5;

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
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="center"
								alignItems="center"
								width="100%"
							>
								<SingleRecord
									key={v._id}
									id={v._id}
									title={v.category}
									price={parseFloat(v.price).toFixed(2)}
									face={v.happiness}
									remarks={v.remarks}
								/>
								<Divider sx={{ width: "90%" }} />
							</Box>
						);
					})
				) : (
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						textAlign="center"
					>
						<img src={Empty} alt="emtpy" height={300} width={300} />
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
