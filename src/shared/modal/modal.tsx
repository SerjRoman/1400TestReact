import { ModalProps } from "./modal.types";
import styles from './modal.module.css'
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal(props: ModalProps ) {
    const { children, isOpen, onClose, className, doCloseOnClickOutside = true, container = document.body } = props

    const modalRef = useRef<HTMLDivElement>(null)

    useEffect( () => {
        function handleClickOutside(event: MouseEvent) {
            if (!onClose || !doCloseOnClickOutside || !modalRef.current) return

            const target = event.target as HTMLBodyElement
            if (!modalRef.current.contains(target)) {
                console.log(target)
                onClose()
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        // clean-up - функция очистки
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])
    
    if (!isOpen) return null
    // createPortal - функция, которая позволяет отобразить HTML элементы в указанном конйтенере
    return createPortal(<div ref={modalRef} className={`${styles.modal} ${className}`}>
        {children}
    </div>, container)
}