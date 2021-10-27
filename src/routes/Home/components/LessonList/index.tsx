/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-10-27 20:53:49
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-10-27 22:31:24
 */
import React, { PropsWithChildren } from 'react';
import './index.less';
import { Card, Skeleton, Button, Alert, Menu } from 'antd';
import { Link } from 'react-router-dom';
import Lesson from '@/typings/lesson';
import { MenuOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
interface Props {
    lessons: any;
    getLessons: any;
}
function LessonList(props: PropsWithChildren<Props>) {
    useEffect(() => {
        if (props.lessons.list.length === 0) {
            props.getLessons();
        }
    });
    return (
        <section className="lesson-list">
            <h2>
                <MenuOutlined></MenuOutlined>全部课程
            </h2>
            {props.lessons.list.map((lesson: Lesson, index: number) => (
                <Link
                    key={lesson.id}
                    to={{ pathname: `/detail/${lesson.id}`, state: lesson }}
                >
                    <Card
                        hoverable={true}
                        style={{ width: '100%' }}
                        cover={<img alt={lesson.title} src={lesson.poster} />}
                    >
                        <Card.Meta
                            title={lesson.title}
                            description={`价格：${lesson.price}元`}
                        ></Card.Meta>
                    </Card>
                </Link>
            ))}
            {props.lessons.hasMore ? (
                <Button
                    onClick={props.getLessons}
                    loading={props.lessons.loading}
                    type="primary"
                    block
                >
                    {props.lessons.loading ? '' : '加载更多'}
                </Button>
            ) : (
                <Alert message="到底了" type="warning" />
            )}
        </section>
    );
}
export default LessonList;
