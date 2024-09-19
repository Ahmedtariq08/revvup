ALTER TABLE variants
ADD COLUMN model_id INT REFERENCES models(id) ON DELETE SET NULL;

CREATE INDEX idx_variants_model_id ON variants(model_id);
