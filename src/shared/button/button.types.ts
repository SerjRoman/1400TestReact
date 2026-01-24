import { DetailedHTMLProps, HTMLAttributes } from "react";


/*

HTMLButtonElement - это интерфейс самого HTML элемента, но не его атрибутов/пропсов
HTMLAttributes - это дженерик интерфейс, который позволяет получить пропсы/атрибуты HTML элемента
DetailedHTMLProps - это дженерик интерфейс, который предоставляте ВСЕ пропсы/атрибуты HTML элемента.
Принимает два параметра
1. Тип атрибутов.
2. Тип самого HTML-элемента.

*/
export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}