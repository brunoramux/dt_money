import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
    children: ReactNode;
}

export function TransactionsProvider({children}: TransactionProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) { // usuario pode passar uma query ou nao
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })
        setTransactions(response.data);
    }

    async function createTransaction(data: CreateTransactionInput){
        const {category, description, price, type} = data

        const results = await api.post('/transactions', {
            description,
            category,
            price, 
            type,
            createdAt: new Date()
        })

        setTransactions(state => [results.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions()
    }, [])
    return (
        <TransactionsContext.Provider value={ {transactions, fetchTransactions, createTransaction} }>
            {children}
        </TransactionsContext.Provider>
    )
}