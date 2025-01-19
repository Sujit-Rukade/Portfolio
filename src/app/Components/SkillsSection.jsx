/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ItemLayout from './ItemLayout'
import Image from 'next/image'
import Link from 'next/link'

const SkillsSection = () => {
    return (
        <section className="py-10 w-full">
            <div className='grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full'>
                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={'https://github-readme-stats.vercel.app/api/top-langs?username=Sujit-Rukade&theme=tokyonight&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
                        alt="Sujit Rukade"
                        loading="lazy"
                        width={100}
                        height={100}
                    />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img
                        className="w-full h-auto"
                        src={'https://github-readme-stats.vercel.app/api?username=Sujit-Rukade&theme=tokyonight&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
                        alt="Sujit Rukade"
                        loading="lazy"
                        height={100}
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full border border-white"}>
                    <img
                        className="w-full h-auto"
                        src={`https://skillicons.dev/icons?i=html,css,js,bootstrap,tailwind,react,nextjs,nodejs,npm,vite,netlify,vercel,mongodb,mysql,postgres,prisma,supabase,tensorflow,pytorch,sklearn,python,flask,cpp,java,octave,git,github,vscode,figma,postman,linux`}
                        alt="Sujit Rukade Skills"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=Sujit-Rukade&theme=dark&background=EB545400&ring=7C3AED&currStreakLabel=7C3AED" alt="GitHub Streak"/>
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0 border border-white"}>
                    <Link
                        href="https://github.com/Sujit-Rukade/FinTracker"
                        target="_blank"
                        className="w-full h-auto"
                    >
                        <img
                            className="w-full h-auto"
                            src={`https://github-readme-stats.vercel.app/api/pin/?username=Sujit-Rukade&repo=FinTracker&theme=tokyonight&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
                            alt="Sujit's Repo"
                            loading="lazy"
                        />
                    </Link>
                </ItemLayout>
            </div>
        </section>
    )
}

export default SkillsSection