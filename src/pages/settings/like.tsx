import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProps,
} from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { Virtuoso } from 'react-virtuoso'

import ListRow from '@shared/ListRow'
import FixedBottomButton from '@shared/FixedBottomButton'
import useEditLike from '@components/settings/like/hooks/useEditLike'
// import { Like } from '@models/like'

// function generateMocks() {
//   const mocks = []

//   for (let i = 0; i < 1000; i += 1) {
//     mocks.push({
//       id: `${i}`,
//       hotelId: `hotel ${i}`,
//       hotelName: `hotel ${i}`,
//       hotelMainImageUrl: `hotel ${i}`,
//       userId: '',
//       order: i,
//     } as Like)
//   }

//   return mocks
// }

window.addEventListener('error', e => {
  if (
    e.message ===
      'ResizeObserver loop completed with undelivered notifications.' ||
    e.message === 'ResizeObserver loop limit exceeded'
  ) {
    e.stopImmediatePropagation()
  }
})

export default function LikePage() {
  const { data, isEdit, reorder, save } = useEditLike()

  // const mocks = generateMocks()

  const handleDragEndDrop = (result: DropResult) => {
    if (result.destination == null) {
      return
    }

    const from = result.source.index
    const to = result.destination?.index

    reorder(from, to)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEndDrop}>
        <StrictModeDroppable droppableId="likes">
          {droppableProps => (
            <ul
              ref={droppableProps.innerRef}
              {...droppableProps.droppableProps}>
              <Virtuoso
                useWindowScroll
                increaseViewportBy={0}
                data={data}
                scrollerRef={droppableProps.innerRef as any}
                itemContent={(index, like) => {
                  return (
                    // 최소 높이 잡아주기
                    <div style={{ minHeight: 1 }}>
                      <Draggable
                        key={like.id}
                        draggableId={like.id}
                        index={index}>
                        {draggableProps => (
                          <li
                            ref={draggableProps.innerRef}
                            {...draggableProps.draggableProps}
                            {...draggableProps.dragHandleProps}>
                            <ListRow
                              as="div"
                              contents={
                                <ListRow.Texts
                                  title={like.order}
                                  subTitle={like.hotelName}
                                />
                              }
                            />
                          </li>
                        )}
                      </Draggable>
                    </div>
                  )
                }}
              />
              {droppableProps.placeholder}
            </ul>
          )}
        </StrictModeDroppable>
      </DragDropContext>

      {isEdit ? <FixedBottomButton label="저장하기" onClick={save} /> : null}
    </div>
  )
}

function StrictModeDroppable({ children, ...props }: DroppableProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (enabled === false) {
    return null
  }

  return <Droppable {...props}>{children}</Droppable>
}
