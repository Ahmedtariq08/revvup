"use client";
import { ThemesWithLabel } from "@/theme/themes";

export const NavBar = () => {
    const themeChanged = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
    };
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-200 shadow-md">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <div className="flex-1">
                        <span className="text-2xl font-bold text-center lg:hidden">
                            Wheels & Deals
                        </span>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal">
                            <li className="justify-around">
                                <details>
                                    <summary>
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Layer_1"
                                            data-name="Layer 1"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                        >
                                            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm1-13V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z" />
                                        </svg>

                                        <span className="hidden lg:inline">Theme</span>
                                    </summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        {ThemesWithLabel.map((theme) => (
                                            <li key={theme.value}>
                                                <button
                                                    data-set-theme={theme.value}
                                                    data-act-class="ACTIVECLASS"
                                                    onClick={(event) =>
                                                        themeChanged(theme.value)
                                                    }
                                                >
                                                    {theme.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <button className="btn btn-ghost">
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                    >
                                        <path d="m16,23.314c-1.252.444-2.598.686-4,.686s-2.748-.242-4-.686v-2.314c0-2.206,1.794-4,4-4s4,1.794,4,4v2.314ZM12,7c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm12,5c0,4.433-2.416,8.311-6,10.389v-1.389c0-3.309-2.691-6-6-6s-6,2.691-6,6v1.389C2.416,20.311,0,16.433,0,12,0,5.383,5.383,0,12,0s12,5.383,12,12Zm-8-3c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z" />
                                    </svg>
                                    <span className="hidden lg:inline">Sign in</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                Content
            </div>
            <div className="drawer-side shadow-md">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu bg-base-200 min-h-full w-70 p-4">
                    <div className="flex items-center justify-center">
                        <button className="btn btn-ghost text-xl">
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="40"
                                height="40"
                            >
                                <path d="m22.996,10.997h-.042c-.208-2.284-1.116-4.368-2.508-6.036l.035-.035c.39-.391.39-1.024-.002-1.414-.389-.391-1.023-.391-1.414,0l-.034.034c-1.669-1.39-3.754-2.296-6.038-2.502v-.046c0-.552-.448-.999-1-.999h0c-.552,0-1,.449-.999,1.001v.046c-2.283.208-4.366,1.116-6.033,2.508l-.038-.038c-.392-.391-1.024-.391-1.414,0-.391.391-.39,1.024,0,1.414l.038.038c-1.389,1.668-2.295,3.751-2.501,6.034h-.05c-.552,0-1,.448-1,1s.448,1,1,1h.05c.207,2.282,1.114,4.365,2.505,6.032l-.038.038c-.391.391-.391,1.024,0,1.414.195.195.451.293.707.293s.512-.098.707-.293l.038-.038c1.667,1.391,3.751,2.298,6.034,2.504v.046c0,.552.448,1,1,1s1-.448,1-1v-.046c2.284-.207,4.369-1.114,6.036-2.505l.034.034c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.024,0-1.414l-.034-.034c1.391-1.668,2.298-3.753,2.504-6.038h.043c.552,0,.999-.448.999-1s-.448-1-1-1Zm-2.052,0l-4.044.002c-.13-.637-.382-1.231-.73-1.755l2.857-2.861c1.037,1.295,1.724,2.881,1.917,4.615Zm-3.333-6.029l-2.856,2.861c-.525-.348-1.118-.599-1.756-.729l-.004-4.045c1.734.192,3.321.878,4.616,1.914Zm-6.616-1.912l.004,4.044c-.637.13-1.231.382-1.755.73l-2.861-2.856c1.294-1.037,2.88-1.724,4.613-1.918Zm-6.026,3.333l2.861,2.856c-.348.525-.599,1.118-.729,1.755l-4.045.002c.192-1.733.878-3.319,1.913-4.613Zm-1.912,6.613l4.044-.002c.13.637.382,1.231.729,1.755l-2.858,2.859c-1.036-1.294-1.723-2.88-1.915-4.612Zm7.943,7.942c-1.733-.193-3.319-.879-4.614-1.915l2.858-2.859c.525.348,1.118.6,1.756.73v4.045Zm1-5.944c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm1,5.944v-4.045c.638-.13,1.231-.382,1.756-.73l2.859,2.858c-1.295,1.037-2.882,1.724-4.615,1.916Zm6.029-3.33l-2.859-2.858c.348-.525.6-1.118.73-1.756l4.045-.002c-.192,1.734-.879,3.321-1.915,4.616Z" />
                            </svg>
                        </button>
                        <span className="text-2xl font-bold text-center">
                            Wheels & Deals
                        </span>
                    </div>
                    <br />

                    <div className="h-full rounded-lg">
                        <ul className="menu p-4 space-y-2">
                            <li className="border-b border-neutral">
                                <a className="font-semibold text-lg">Cars</a>
                            </li>
                            <li className="border-b border-neutral">
                                <a className="font-semibold text-lg">Bikes</a>
                            </li>
                            <li className="border-b border-neutral">
                                <a className="font-semibold text-lg">Vans</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
