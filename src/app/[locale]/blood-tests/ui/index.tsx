interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Section = ({ children, ...props }: SectionProps) => {
    return <section {...props}>
        {children}
    </section>
}

export { Section }