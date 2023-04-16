import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormaSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormaSchema>;



export function SearchForm(){

    const { fetchTransactions } = useContext(TransactionsContext)
    const { register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormaSchema)
    })

    function handleSearchTransactions(data: SearchFormInputs){
        console.log(data)
        fetchTransactions(data.query)

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações"
                {...register('query')}
            />
            <button type="submit">
                <MagnifyingGlass size={20} />
            </button>
        </SearchFormContainer>
    )
}