import { ReactNode } from "react"

export interface ModalProps {
    isOpen: boolean
    children?: ReactNode
    doCloseOnClickOutside?: boolean
    onClose?: () => void
    className?: string
    container?: HTMLElement
}