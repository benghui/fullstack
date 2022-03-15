import React from 'react';

const Transaction = ({ transactionHash, from, to, value }) => {
	return (
		<div className="transaction-container">
			<div className="transaction-row">
				<div className="transaction">
					<h1>{ transactionHash }</h1>
				</div>
				<div className="data">
					<div className="from">
						<p>{ from }</p>
					</div>
					<div className="to">
						<p>{ to }</p>
					</div>
					<div className="value">
						<p>{ value }</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Transaction
