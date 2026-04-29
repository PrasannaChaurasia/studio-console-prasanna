"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const filters = ["all", "conceptual", "urban", "bim", "real"];

export default function ProjectConsole({ projects }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState(projects[0]?.slug);

  const visibleProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    return projects.filter((project) => {
      const haystack = [
        project.title,
        project.category,
        project.summary,
        project.long_description,
        ...(project.tags || [])
      ]
        .join(" ")
        .toLowerCase();
      const matchesFilter = activeFilter === "all" || haystack.includes(activeFilter);
      const matchesSearch = !search || haystack.includes(search);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, projects, query]);

  const selected =
    visibleProjects.find((project) => project.slug === selectedSlug) ||
    visibleProjects[0] ||
    projects[0];

  return (
    <section className="workstation" id="portfolio-console">
      <div className="console-intro reveal-block in-view">
        <p className="eyebrow">Interactive Project Console</p>
        <h2>Select a project to inspect the source, brief, and case-study route.</h2>
      </div>

      <section className="control-deck reveal delay-1 in-view" aria-label="Portfolio controls">
        <label className="command-search" htmlFor="project-search">
          <span>Search portfolio</span>
          <input
            id="project-search"
            type="search"
            placeholder="Search Aeon, BIM, urban, real projects..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="filter-row" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`console-tab ${activeFilter === filter ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter[0].toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="console-stage reveal delay-2 in-view">
        <section className="source-viewer" aria-label="Selected portfolio preview">
          <div className="viewer-toolbar">
            <div>
              <span id="viewer-kicker">{selected?.category} / {selected?.year}</span>
              <h2 id="viewer-title">{selected?.title}</h2>
            </div>
            {selected?.pdf_url ? <a href={selected.pdf_url}>Open PDF</a> : null}
          </div>
          <div className="viewer-frame">
            {selected?.pdf_url ? (
              <iframe
                id="source-preview"
                title="Selected portfolio PDF preview"
                src={`${selected.pdf_url}#toolbar=0&navpanes=0`}
              />
            ) : null}
            <div className="viewer-fallback">
              <p>PDF preview depends on uploaded source files. Use Open PDF if this panel does not render.</p>
            </div>
          </div>
        </section>
        <section className="project-brief" aria-label="Selected project brief">
          <div>
            <p className="eyebrow">Selected Brief</p>
            <h2 id="inspector-title">{selected?.title}</h2>
          </div>
          <p id="inspector-copy">{selected?.long_description}</p>
          {selected ? (
            <Link className="primary-link" href={`/project/${selected.slug}`}>
              Open Case Study
            </Link>
          ) : null}
        </section>
      </section>

      <section className="project-dock reveal delay-3 in-view" id="project-grid" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article
            className={`dock-card ${selected?.slug === project.slug ? "is-selected" : ""}`}
            tabIndex={0}
            key={project.slug}
            onClick={() => setSelectedSlug(project.slug)}
            onFocus={() => setSelectedSlug(project.slug)}
          >
            <div className={`dock-media ${project.media_class || "media-real"}`} />
            <div className="dock-copy">
              <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
