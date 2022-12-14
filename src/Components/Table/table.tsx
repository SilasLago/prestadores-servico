import classNames from 'classnames'
import { useEffect, useState } from 'react'
import styles from './table.module.scss'
import { NavigationFooterBar, RenderTrs } from './table_components'
import { Line } from './utils/classes';

interface ITable {
  id?: string;
  className?: string;
  titles: Array<string>;
  lines: Array<Line>;
  pageable?: boolean;
  showAside?: boolean;
  continueOpen?: number;
}

const Table = ({
  id, // The table id
  className = '', // A custom className to the table
  titles, // The data that will be showed in the head (need to be a array of strings)
  lines, // The data that will be showed in the body (need to be a array of objects)
  pageable = true, // Create pages in the table with the lines reparted to set a max of data showing in the screen
  showAside, // If this table need a down menu when some line are clicked
  continueOpen, // It receives an id of a specific line to when the table are updated the asideMenu are not closed
}: ITable) => {
  const [curPage, setCurPage] = useState<number>(0);
  const [minPage, setMinPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [moreInfoAbout, setMoreInfoAbout] = useState<number | null>(null);
  const [amountPages, setAmountPages] = useState<number>(0);
  const [allPages, setAllPages] = useState<Array<Array<Line>>>([]);

  const maxNavigateButtons = 8
  const maxLinesInPage = 5

  useEffect(() => {
    if (lines.length > 0 && pageable && amountPages === 0) {
      setNewAmountPages()
    } else if (amountPages > 0 && pageable) {
      setNewAmountPages()
      updatePagesList()
    }
  }, [lines])

  useEffect(() => {
    if (amountPages > 0) {
      setNewAmountPages()
      updatePagesList()
    }
  }, [amountPages])

  const setNewAmountPages = () => {
    setAmountPages(Number(Math.ceil(lines.length / 5).toFixed(0)));
  }

  const updatePagesList = () => {
    setMoreInfoAbout(null);
    let newLinesInPages: Array<Array<Line>> = [];
    for (let i = 0; i < amountPages; i++) {
      newLinesInPages.push([]);
      for (let ii = i * maxLinesInPage; ii < i * maxLinesInPage + maxLinesInPage; ii++) {
        if (ii < lines.length) {
          newLinesInPages[i].push(lines[ii]);
        }
      }
    }
    setMaxAndMinPage(newLinesInPages)
  }

  const setMaxAndMinPage = (allPages: Array<Array<Line>>) => {
    let lastPage = allPages.length
    let range = [0, lastPage]
    if (lastPage > maxNavigateButtons) {
      let min = curPage - maxNavigateButtons / 2
      let max = curPage + maxNavigateButtons / 2
      if (min < 0) {
        max += Math.abs(min)
        min = 0
      }
      if(max > lastPage) {
        min = lastPage - maxNavigateButtons
        max = lastPage
      }
      range = [min, max]
    }
    setMinPage(range[0])
    setMaxPage(range[1])
    setAllPages(allPages)
  }

  const tradePage = (index: number) => {
    setCurPage(index)
  }

  useEffect(() => {
    updatePagesList()
  }, [curPage])

  useEffect(() => {
    if(continueOpen) {
      setMoreInfoAbout(continueOpen)
    }
  }, [continueOpen])

  return (
    <section>
      {/* Inside of this div goes the table and his content. */}
      <div className={styles.container}>
        {(allPages.length > 0 || pageable === false) && (
          <table id={id} className={classNames({
            "table border": true,
            [className]: true,
            [styles.table]: true
          })}>
            {/* Mapping all the titles passed to the Table component */}
            <thead className={styles.head}>
              <tr>
                {titles.map((title, index) => (
                  <th 
                    className={classNames({
                      [styles.titles]: true,
                      "border text-center": true,
                    })} 
                    key={`${title}-${index}`}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Lines data go here */}
            <tbody className={styles.body}>
              <RenderTrs
                trsData={pageable ? allPages[curPage] : lines}
                tableColumnsLength={titles.length}
                continueOpen={continueOpen}
                setMoreInfoAbout={setMoreInfoAbout}
                moreInfoAbout={moreInfoAbout}
                showAside={showAside}
              />
            </tbody>
          </table>
        )}
      </div>
      {/* Now we are creating the buttons case the table are pageable. */}
      {pageable && allPages.length > 0 && (
        <NavigationFooterBar 
          showGoToFirst={allPages.length > maxNavigateButtons && minPage !== 0}
          showGoToLast={allPages.length > maxNavigateButtons && maxPage !== allPages.length}
          buttons={allPages.slice(minPage, maxPage)}
          curPage={curPage}
          minPage={minPage}
          maxPage={allPages.length-1}
          onClick={tradePage}
        />
      )}
    </section>
  )
}

export default Table