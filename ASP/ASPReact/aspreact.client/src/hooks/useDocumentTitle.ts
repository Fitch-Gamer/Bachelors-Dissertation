import { useEffect } from 'react'

export default function useDocumentTitle(title: string, preserve?: boolean) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      if (!preserve) document.title = previous
    }
  }, [title, preserve])
}