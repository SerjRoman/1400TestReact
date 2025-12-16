import { useEffect, useState } from 'react'
import styles from './select-category.module.css'
import { SelectCategoryProps } from './select-category.types'
import { Category } from '../../shared/types'


export function SelectCategory({selectedCategory, setSelectedCategory}: SelectCategoryProps){
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    
    useEffect( () => {
        async function getCategories() {
            // fetch - позволяет отправить запрос, принимает 2 параметра:
            //  url - ссылка(строка)
            // конфигурация запроса(метод, заголовки...)
            try {
                setLoading(true)
                const response = await fetch("http://localhost:8001/categories", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data: Category[] = await response.json()

                setCategories(data)
            } catch (error) {
                console.error(error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        getCategories()
    }, [])


    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <p>{error}</p>
    }
    
    
    return (
        <div className={styles.selectCategories}>
            <label><input
                value={"All"}
                type="radio"
                onChange={event => {setSelectedCategory("All")}}
                checked={selectedCategory === "All"}
                />
                All
            </label>
            {categories.map((category) => {
                return (
                    <label key={category.id} className={styles.selectedCategory} >
                        <input
                            type="radio"
                            onChange={event => {
                                setSelectedCategory(category.id)
                            }}
                            checked={selectedCategory === category.id}
                            />
                        {category.name}
                    </label>
                )
            })}
        </div>
    )
}