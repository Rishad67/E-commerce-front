import React from 'react'
import ProductItem from './ProductItem';
import AndroidIcon from '../Icons/android.png';
import FlutterIcon from '../Icons/flutter.png';
import NodeIcon from '../Icons/nodejs.png'
import ReactIcon from '../Icons/react.png';
import MongoIcon from '../Icons/mongodb.png';
import MySqlIcon from '../Icons/mysql.png';
import JavaIcon from '../Icons/java.png';
import PythonIcon from '../Icons/python.png';
import AWSIcon from '../Icons/aws.png';
import GitIcon from '../Icons/git.png';
import JavaScriptIcon from '../Icons/javascript.png';
import BootstrapIcon from '../Icons/bootstrap.png';
import WordPressIcon from '../Icons/wordpress.png';
import CSharpIcon from '../Icons/csharp.png';
import CppIcon from '../Icons/cpp.png';

export default function ProductSection() {
    return (
        <div className="row">
            {
                [
                    {image: AndroidIcon,label: "Android"},
                    {image: FlutterIcon,label: "Flutter"},
                    {image: NodeIcon,label: "Node Js"},
                    {image: ReactIcon,label: "React Js"},
                    {image: JavaIcon,label: "Java"},
                    {image: PythonIcon,label: "Python"},
                    {image: CSharpIcon,label: ".Net c#"},
                    {image: CppIcon,label: "C++"},
                    {image: AWSIcon,label: "AWS"},
                    {image: GitIcon,label: "Git"},
                    {image: JavaScriptIcon,label: "JavaScript"},
                    {image: BootstrapIcon,label: "BootStrap"},
                    {image: MongoIcon,label: "MongoDB"},
                    {image: MySqlIcon,label: "MySql"},
                    {image: WordPressIcon,label: "WordPress"}
                ].map(item => {
                    return (<ProductItem item={item}/>);
                })
            }
        </div>
    )
}
