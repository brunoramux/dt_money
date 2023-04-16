import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";


export function Transaction(){
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    {transactions.map(data => {
                        return (
                        <tr key={data.id}>
                            <td>{data.description}</td>
                            <td><PriceHighlight variant={data.type}>
                                {data.type === 'outcome'&& '- '}
                                {priceFormatter.format(data.price)}</PriceHighlight></td>
                            <td>{data.category}</td>
                            <td>{dateFormatter.format(new Date(data.createdAt))}</td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </TransactionsTable>
            </TransactionContainer>
        </div>
    )
}