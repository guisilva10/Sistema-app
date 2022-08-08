import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
     clothes:{title:'Roupas', color: 'purple', expense: true},
     water:{title:'Conta de Água', color: 'black', expense: true},
     ligth:{title:'Conta de Luz', color: 'gray', expense: true},
    health:{title:'Convênio', color: 'orange', expense: true}
}
