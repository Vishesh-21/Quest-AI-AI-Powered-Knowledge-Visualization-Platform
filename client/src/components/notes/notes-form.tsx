import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Loader2,
  Layout,
  BarChart3,
  RotateCcw,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface GeneratorProps {
  loading: boolean;
  setLoading: (val: boolean) => void;
  setResult: (data: any) => void;
  setError: (msg: string) => void;
}

export const AINoteGenerator = ({
  loading,
  setLoading,
  setResult,
  setError,
}: GeneratorProps) => {
  const [formData, setFormData] = useState({
    topic: "",
    interviewType: "",
    role: "",
    level: "",
    experience: "",
    includeGraphs: false,
    includeDiagrams: false,
    revisionMode: false,
  });

  // Helper to handle input changes
  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.topic || !formData.role) {
      toast.error("Please fill in the required fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Replace this with your actual API call
      console.log("Generating with data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setResult({ success: true, notes: "AI generated content here..." });
    } catch (err) {
      setError("Failed to generate notes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="p-8 border-primary/10 bg-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

        <div className="flex items-center gap-3">
          <div className="rounded-lg">
            {/* <BrainCircuit className="w-6 h-6 text-primary-foreground" /> */}
            <img src="./logo.png" alt="logo-image" className="h-10 w-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              AI Note Architect
            </h2>
            <p className="text-sm text-muted-foreground font-medium">
              Configure your study path
            </p>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Main Topic Input */}
          <div className="space-y-2">
            <Label htmlFor="topic">Interview Topic</Label>
            <Input
              id="topic"
              placeholder="e.g. System Design, React Performance"
              className="h-10 bg-background/50"
              value={formData.topic}
              onChange={(e) => updateField("topic", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Interview Type */}
            <div className="space-y-2 ">
              <Label>Interview Type</Label>
              <Select onValueChange={(v) => updateField("interviewType", v)}>
                <SelectTrigger className="h-10 w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Round</SelectItem>
                  <SelectItem value="behavioral">Behavioral</SelectItem>
                  <SelectItem value="managerial">Managerial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label>Role</Label>
              <Input
                placeholder="e.g. Frontend Engineer"
                className=" bg-background/50"
                value={formData.role}
                onChange={(e) => updateField("role", e.target.value)}
              />
            </div>

            {/* Level */}
            <div className="space-y-2">
              <Label>Interview Level</Label>
              <Select onValueChange={(v) => updateField("level", v)}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Complexity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior (L1-L2)</SelectItem>
                  <SelectItem value="mid">Mid-Level (L3-L4)</SelectItem>
                  <SelectItem value="senior">Senior+ (L5+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <Label>Your Experience (Years)</Label>
              <Input
                type="number"
                placeholder="e.g. 3"
                className="bg-background/50"
                value={formData.experience}
                onChange={(e) => updateField("experience", e.target.value)}
              />
            </div>
          </div>

          {/* AI Toggle Section */}
          <div className="border-t border-primary/10 py-4">
            <Label className="text-xs uppercase tracking-[0.1em] text-muted-foreground mb-4 block">
              Enhanced Generation Features
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ToggleCard
                icon={<BarChart3 className="w-4 h-4" />}
                label="Graphs"
                checked={formData.includeGraphs}
                onChange={(v: any) => updateField("includeGraphs", v)}
              />
              <ToggleCard
                icon={<Layout className="w-4 h-4" />}
                label="Diagrams"
                checked={formData.includeDiagrams}
                onChange={(v: any) => updateField("includeDiagrams", v)}
              />
              <ToggleCard
                icon={<RotateCcw className="w-4 h-4" />}
                label="Revision"
                checked={formData.revisionMode}
                onChange={(v: any) => updateField("revisionMode", v)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            variant="outline"
            className="w-full h-10 rounded-lg cursor-pointer "
          >
            {loading ? (
              <span className="flex items-center gap-1 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> Generating...
              </span>
            ) : (
              <span className="flex items-center gap-2 font-medium tracking-wide">
                Generate Notes
                <Sparkles className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

// Modular Reusable Toggle Component (DRY)
const ToggleCard = ({ icon, label, checked, onChange }: any) => (
  <div className="flex items-center justify-between p-3 rounded-xl border bg-background/30 transition-colors hover:border-primary/30">
    <div className="flex items-center gap-2 text-sm">
      <span className="text-primary">{icon}</span>
      {label}
    </div>
    <Switch checked={checked} onCheckedChange={onChange} />
  </div>
);
