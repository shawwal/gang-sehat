import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function ServiceCard({
  title,
  description,
  ctaHref,
  ctaLabel,
  imageSrc, // add optional image support
}: {
  title: string
  description: string
  ctaHref: string
  ctaLabel: string
  imageSrc?: string
}) {
  return (
    <Card className="backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-transform duration-200 hover:-translate-y-0.5">
      {imageSrc ? (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-40 object-cover rounded-t-md border-b"
        />
      ) : null}
      <CardHeader>
        <CardTitle className="text-pretty">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <a href={ctaHref}>
          <Button variant="default" className="group">
            {ctaLabel}
            <FontAwesomeIcon className="ml-2 transition-transform group-hover:translate-x-0.5" icon={faArrowRight} />
          </Button>
        </a>
      </CardContent>
    </Card>
  )
}
