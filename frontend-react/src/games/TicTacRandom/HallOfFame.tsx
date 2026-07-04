import { useState, useEffect, useMemo } from "react";
import api from "../../services/api";
import styles from "./HallOfFame.module.css";
import { useLanguage } from "../../context/useLanguage";

interface Player {
  id: number;
  nombreUsuario: string;
  fechaDeExito: string;
}

const PLAYERS_PER_PAGE = 5;

export default function HallOfFame() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  // Equivalente a onMounted(() => fetchPlayers())
  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      let page = 1;
      let allPlayers: Player[] = [];
      let hasNext = true;

      while (hasNext) {
        const res = await api.get(`api/v1/Jugadores/?page=${page}`);
        const data = res.data;

        allPlayers = allPlayers.concat(data || []);

        if (data.next) {
          page += 1;
        } else {
          hasNext = false;
        }
      }

      setPlayers(allPlayers);
    } catch (e) {
      console.error("Error loading players:", e);
    } finally {
      setLoading(false);
    }
  };

  // Equivalente a filteredPlayers + su computed derivado
  const filteredPlayers = useMemo(() => {
    const term = appliedSearch.trim().toLowerCase();
    if (!term) return players;
    return players.filter((p) =>
      p.nombreUsuario.toLowerCase().includes(term)
    );
  }, [players, appliedSearch]);

  const totalPages = Math.ceil(filteredPlayers.length / PLAYERS_PER_PAGE);

  const paginatedPlayers = useMemo(() => {
    const start = (currentPage - 1) * PLAYERS_PER_PAGE;
    return filteredPlayers.slice(start, start + PLAYERS_PER_PAGE);
  }, [filteredPlayers, currentPage]);

  const handleSearch = () => {
    setAppliedSearch(searchTerm);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm rounded mb-4 text-center">
            <div className="card-body">
              <h2 className="mb-3">🏆 {t.hallOfFame}</h2>
              <p className="text-muted mb-0">{t.hallTitle}</p>
            </div>
          </div>

          {/* Búsqueda */}
          <div className="input-group mb-4 shadow-sm">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="form-control"
              placeholder="Buscar jugadores..."
              data-cy="input-search"
            />
            <button
              className="btn btn-outline-primary"
              onClick={handleSearch}
              data-cy="submit-search"
            >
              Buscar
            </button>
          </div>

          {/* Tabla */}
          <div className="card shadow-sm rounded">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped table-sm mb-0 align-middle">
                  <thead className={`table-light ${styles.tableHead}`}>
                    <tr>
                      <th>{t.name}</th>
                      <th>{t.hallDate}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={2} className="text-center text-muted">
                          {t.hallLoad}
                        </td>
                      </tr>
                    ) : paginatedPlayers.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="text-center text-muted">
                          {t.hallNoPlayer}
                        </td>
                      </tr>
                    ) : (
                      paginatedPlayers.map((player) => (
                        <tr key={player.id}>
                          <td>{player.nombreUsuario}</td>
                          <td>{player.fechaDeExito}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <nav className="d-flex justify-content-center my-3">
                  <ul className="pagination pagination-sm mb-0">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button
                        className="page-link"
                        onClick={() => goToPage(currentPage - 1)}
                        data-cy="previous-button"
                      >
                        «
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <li
                        key={page}
                        className={`page-item ${currentPage === page ? styles.pageLinkActive : ""}`}
                      >
                        <button className="page-link" onClick={() => goToPage(page)}>
                          {page}
                        </button>
                      </li>
                    ))}

                    <li
                      className={`page-item ${currentPage === totalPages ? "disabled" : ""
                        }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => goToPage(currentPage + 1)}
                        data-cy="next-button"
                      >
                        »
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}