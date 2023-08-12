import React, { useCallback, useEffect } from 'react';
import { Styled as S } from './pages.styled';
import { useStorage } from '../hooks/useStorage';
import { Queue } from './Queue';
import { Settings } from './Settings';
import { Shortcuts } from './Shortcuts';

enum Page {
  Queue = 'Queue',
  Settings = 'Settings',
  Shortcut = 'Shortcut',
}

export const CopyQueue = (): JSX.Element => {
  const [page, setPage] = useStorage<Page>('local', 'selected_page', Page.Queue)

  useEffect(() => { console.log(page) }, [])

  const handleSelectPage = useCallback((page: Page) => setPage(page), [])

  return (
        <S.App>
            <S.Toolbar>
                {[Page.Queue, Page.Settings, Page.Shortcut].map(p =>
                    <S.ToolbarRecord key={p.toLocaleString()}
                                     $selected={p === page}
                                     onClick={() => handleSelectPage(p)}>
                        {p}
                    </S.ToolbarRecord>)}

            </S.Toolbar>
            {
                page === Page.Queue
                  ? <Queue/>
                  : page === Page.Settings
                    ? <Settings/>
                    : <Shortcuts/>
            }
        </S.App>
  )
}
